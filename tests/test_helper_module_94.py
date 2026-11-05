import pytest
from utils.helper_module_94 import process_data_94

def test_process_data_94():
    assert process_data_94({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_94(None) == {}
