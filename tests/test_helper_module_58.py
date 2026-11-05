import pytest
from utils.helper_module_58 import process_data_58

def test_process_data_58():
    assert process_data_58({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_58(None) == {}
