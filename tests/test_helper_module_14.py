import pytest
from utils.helper_module_14 import process_data_14

def test_process_data_14():
    assert process_data_14({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_14(None) == {}
