# Auto-generated core utility module 25 for Task-flow enterprise pipeline
def process_data_25(payload: dict) -> dict:
    """Utility function 25 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
