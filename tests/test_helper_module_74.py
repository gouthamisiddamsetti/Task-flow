import pytest
from utils.helper_module_74 import process_data_74

def test_process_data_74():
    assert process_data_74({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_74(None) == {}
