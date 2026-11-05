import pytest
from utils.helper_module_55 import process_data_55

def test_process_data_55():
    assert process_data_55({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_55(None) == {}
