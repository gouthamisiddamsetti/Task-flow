import pytest

def test_all_demo_personas_login(client):
    """Verify that all 4 1-click persona demo accounts can log in."""
    from seed import ensure_seed_data
    ensure_seed_data()

    demos = [
        ("admin@taskflow.local", "Admin"),
        ("lead_backend@taskflow.local", "Lead"),
        ("dev_backend@taskflow.local", "Member"),
        ("dev_frontend@taskflow.local", "Member")
    ]
    for email, expected_role in demos:
        res = client.post("/api/auth/login", json={"email": email, "password": "password123"})
        assert res.status_code == 200, f"Failed for {email}: {res.data}"
        user = res.get_json()["user"]
        assert user["email"] == email
        assert user["role"] == expected_role
        client.post("/api/auth/logout")

def test_signup_page_and_new_account_login(client):
    """Verify user can sign up with a new account and immediately log in."""
    # 1. Fetch available teams
    teams_res = client.get("/api/auth/teams")
    assert teams_res.status_code == 200
    teams = teams_res.get_json()["teams"]

    # 2. Register new account
    reg_payload = {
        "username": "Diana Prince",
        "email": "diana@taskflow.local",
        "password": "SuperheroPassword123!",
        "role": "Lead",
        "team_id": teams[0]["id"] if teams else None
    }
    reg_res = client.post("/api/auth/register", json=reg_payload)
    assert reg_res.status_code == 201
    reg_user = reg_res.get_json()["user"]
    assert reg_user["email"] == "diana@taskflow.local"

    # 3. Log out
    client.post("/api/auth/logout")

    # 4. Log in with new credentials
    login_res = client.post("/api/auth/login", json={
        "email": "diana@taskflow.local",
        "password": "SuperheroPassword123!"
    })
    assert login_res.status_code == 200
    logged_user = login_res.get_json()["user"]
    assert logged_user["email"] == "diana@taskflow.local"
    assert logged_user["role"] == "Lead"

    # 5. Access protected /api/auth/me
    me_res = client.get("/api/auth/me")
    assert me_res.status_code == 200
    assert me_res.get_json()["user"]["username"] == "Diana Prince"
