import pytest
from utils.helper_module_63 import process_data_63

def test_process_data_63():
    assert process_data_63({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_63(None) == {}
