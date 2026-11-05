import pytest
from utils.helper_module_77 import process_data_77

def test_process_data_77():
    assert process_data_77({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_77(None) == {}
