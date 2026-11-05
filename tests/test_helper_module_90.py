import pytest
from utils.helper_module_90 import process_data_90

def test_process_data_90():
    assert process_data_90({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_90(None) == {}
