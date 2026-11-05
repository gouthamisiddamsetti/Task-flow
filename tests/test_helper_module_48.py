import pytest
from utils.helper_module_48 import process_data_48

def test_process_data_48():
    assert process_data_48({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_48(None) == {}
