import pytest
from utils.helper_module_34 import process_data_34

def test_process_data_34():
    assert process_data_34({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_34(None) == {}
