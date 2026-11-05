import pytest
from utils.helper_module_68 import process_data_68

def test_process_data_68():
    assert process_data_68({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_68(None) == {}
