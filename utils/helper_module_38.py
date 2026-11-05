# Auto-generated core utility module 38 for Task-flow enterprise pipeline
def process_data_38(payload: dict) -> dict:
    """Utility function 38 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
