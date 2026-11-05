import pytest
from utils.helper_module_36 import process_data_36

def test_process_data_36():
    assert process_data_36({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_36(None) == {}
