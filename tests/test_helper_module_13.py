import pytest
from utils.helper_module_13 import process_data_13

def test_process_data_13():
    assert process_data_13({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_13(None) == {}
