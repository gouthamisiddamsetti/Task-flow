import pytest
from utils.helper_module_87 import process_data_87

def test_process_data_87():
    assert process_data_87({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_87(None) == {}
