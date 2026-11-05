# Auto-generated core utility module 77 for Task-flow enterprise pipeline
def process_data_77(payload: dict) -> dict:
    """Utility function 77 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
