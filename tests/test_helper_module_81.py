import pytest
from utils.helper_module_81 import process_data_81

def test_process_data_81():
    assert process_data_81({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_81(None) == {}
