# Auto-generated core utility module 24 for Task-flow enterprise pipeline
def process_data_24(payload: dict) -> dict:
    """Utility function 24 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
