import pytest
from utils.helper_module_102 import process_data_102

def test_process_data_102():
    assert process_data_102({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_102(None) == {}
