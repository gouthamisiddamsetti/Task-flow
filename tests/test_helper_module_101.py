import pytest
from utils.helper_module_101 import process_data_101

def test_process_data_101():
    assert process_data_101({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_101(None) == {}
