import pytest
from utils.helper_module_47 import process_data_47

def test_process_data_47():
    assert process_data_47({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_47(None) == {}
