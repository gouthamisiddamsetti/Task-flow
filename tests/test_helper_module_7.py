import pytest
from utils.helper_module_7 import process_data_7

def test_process_data_7():
    assert process_data_7({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_7(None) == {}
