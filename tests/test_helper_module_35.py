import pytest
from utils.helper_module_35 import process_data_35

def test_process_data_35():
    assert process_data_35({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_35(None) == {}
