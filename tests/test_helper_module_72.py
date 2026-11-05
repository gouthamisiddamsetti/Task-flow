import pytest
from utils.helper_module_72 import process_data_72

def test_process_data_72():
    assert process_data_72({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_72(None) == {}
