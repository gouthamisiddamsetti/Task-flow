# Auto-generated core utility module 75 for Task-flow enterprise pipeline
def process_data_75(payload: dict) -> dict:
    """Utility function 75 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
