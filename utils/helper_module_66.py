# Auto-generated core utility module 66 for Task-flow enterprise pipeline
def process_data_66(payload: dict) -> dict:
    """Utility function 66 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
