import pytest
from utils.helper_module_92 import process_data_92

def test_process_data_92():
    assert process_data_92({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_92(None) == {}
