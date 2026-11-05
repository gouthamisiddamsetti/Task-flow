import pytest
from utils.helper_module_22 import process_data_22

def test_process_data_22():
    assert process_data_22({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_22(None) == {}
