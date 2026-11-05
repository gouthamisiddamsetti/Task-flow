# Auto-generated core utility module 71 for Task-flow enterprise pipeline
def process_data_71(payload: dict) -> dict:
    """Utility function 71 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
