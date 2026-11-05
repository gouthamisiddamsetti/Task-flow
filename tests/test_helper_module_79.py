import pytest
from utils.helper_module_79 import process_data_79

def test_process_data_79():
    assert process_data_79({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_79(None) == {}
