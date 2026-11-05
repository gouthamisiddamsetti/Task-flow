import pytest
from utils.helper_module_53 import process_data_53

def test_process_data_53():
    assert process_data_53({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_53(None) == {}
