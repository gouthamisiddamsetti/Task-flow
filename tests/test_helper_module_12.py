import pytest
from utils.helper_module_12 import process_data_12

def test_process_data_12():
    assert process_data_12({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_12(None) == {}
