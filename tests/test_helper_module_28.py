import pytest
from utils.helper_module_28 import process_data_28

def test_process_data_28():
    assert process_data_28({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_28(None) == {}
