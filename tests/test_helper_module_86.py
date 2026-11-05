import pytest
from utils.helper_module_86 import process_data_86

def test_process_data_86():
    assert process_data_86({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_86(None) == {}
