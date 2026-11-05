import pytest
from utils.helper_module_4 import process_data_4

def test_process_data_4():
    assert process_data_4({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_4(None) == {}
