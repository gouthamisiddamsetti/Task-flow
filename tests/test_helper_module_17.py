import pytest
from utils.helper_module_17 import process_data_17

def test_process_data_17():
    assert process_data_17({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_17(None) == {}
