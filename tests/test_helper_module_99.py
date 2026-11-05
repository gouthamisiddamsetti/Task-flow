import pytest
from utils.helper_module_99 import process_data_99

def test_process_data_99():
    assert process_data_99({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_99(None) == {}
