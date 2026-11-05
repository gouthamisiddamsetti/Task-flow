import pytest
from utils.helper_module_51 import process_data_51

def test_process_data_51():
    assert process_data_51({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_51(None) == {}
