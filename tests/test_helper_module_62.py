import pytest
from utils.helper_module_62 import process_data_62

def test_process_data_62():
    assert process_data_62({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_62(None) == {}
