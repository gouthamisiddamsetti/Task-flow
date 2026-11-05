import pytest
from utils.helper_module_91 import process_data_91

def test_process_data_91():
    assert process_data_91({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_91(None) == {}
