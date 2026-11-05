# Auto-generated core utility module 4 for Task-flow enterprise pipeline
def process_data_4(payload: dict) -> dict:
    """Utility function 4 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
