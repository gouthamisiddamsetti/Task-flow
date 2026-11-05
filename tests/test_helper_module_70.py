import pytest
from utils.helper_module_70 import process_data_70

def test_process_data_70():
    assert process_data_70({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_70(None) == {}
