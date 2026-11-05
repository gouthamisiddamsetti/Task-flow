import pytest
from utils.helper_module_78 import process_data_78

def test_process_data_78():
    assert process_data_78({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_78(None) == {}
