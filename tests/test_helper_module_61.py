import pytest
from utils.helper_module_61 import process_data_61

def test_process_data_61():
    assert process_data_61({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_61(None) == {}
