import pytest
from utils.helper_module_93 import process_data_93

def test_process_data_93():
    assert process_data_93({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_93(None) == {}
