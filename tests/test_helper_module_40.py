import pytest
from utils.helper_module_40 import process_data_40

def test_process_data_40():
    assert process_data_40({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_40(None) == {}
