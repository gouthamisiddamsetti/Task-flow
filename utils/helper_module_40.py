# Auto-generated core utility module 40 for Task-flow enterprise pipeline
def process_data_40(payload: dict) -> dict:
    """Utility function 40 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
