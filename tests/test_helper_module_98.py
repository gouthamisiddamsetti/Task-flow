import pytest
from utils.helper_module_98 import process_data_98

def test_process_data_98():
    assert process_data_98({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_98(None) == {}
