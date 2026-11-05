# Auto-generated core utility module 2 for Task-flow enterprise pipeline
def process_data_2(payload: dict) -> dict:
    """Utility function 2 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
