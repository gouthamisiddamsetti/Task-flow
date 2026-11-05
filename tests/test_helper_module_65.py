import pytest
from utils.helper_module_65 import process_data_65

def test_process_data_65():
    assert process_data_65({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_65(None) == {}
