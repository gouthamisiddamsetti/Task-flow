import pytest
from utils.helper_module_19 import process_data_19

def test_process_data_19():
    assert process_data_19({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_19(None) == {}
