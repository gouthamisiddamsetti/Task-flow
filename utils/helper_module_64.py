# Auto-generated core utility module 64 for Task-flow enterprise pipeline
def process_data_64(payload: dict) -> dict:
    """Utility function 64 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
